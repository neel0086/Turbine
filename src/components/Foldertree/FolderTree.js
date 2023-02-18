import React, { useContext, useEffect, useState } from 'react'
import { FolderContext } from '../../context/FolderProvider'
import './FolderTree.css'
import FolderIcon from '../../images/folder.png'
import FolderRecc from './FolderRecc'
const fs = window.require('fs');
function FolderTree() {
    const [folderActive, setFolderActive] = useState("");
    const [folderData,setFolderData] = useState({});
    const { folderVal } = useContext(FolderContext);
    
    useEffect(() => {
        const fileFolder = {}
        const createDirectoryTree = (fileDir, depth,f_name='root') => {
            let filenames = fs.readdirSync(fileDir);
            var ulHtml = {"name":f_name,children:[]}
            filenames.forEach(async (file) => {
                var stat = fs.lstatSync(fileDir + '\\' + file);
                if (fileDir in fileFolder) {
                    fileFolder[fileDir].push([stat.isFile() ? 'File' : 'Folder', fileDir + '\\' + file, file])
                }
                else {
                    fileFolder[fileDir] = []
                }
                if (stat.isFile()) {
                    ulHtml['children'].push({"name":file})
                }
                else {
                    ulHtml['children'].push({"name":file,"children":[createDirectoryTree(fileDir + "\\" + file, depth + 1,file)]})
                }
            });
            return ulHtml
        }

        // RESPOND TO CHANGE IN SIDEBAR FOLDER
        const changeSidebarFolder = (pfiles, folderName) => {
            let filenames = fs.readdirSync(pfiles);
            setFolderActive(folderName.toUpperCase())
            setFolderData(createDirectoryTree(pfiles, 0, ""))
        }

        //CONTROLLING FOLDER VIEW (IN PROCESS)
        const folderView = async () => {
            var files = folderVal;
            let cfile = files.webkitRelativePath.replace('/', "\\")
            let pfiles = files.path.replace(cfile, '') + cfile.split("\\")[0]
            changeSidebarFolder(pfiles, cfile.split("\\")[0])
        }
        if (folderVal)
            folderView()
    }, [folderVal])




    // HTML SCRIPTS STARTS
    return (
        <div className='ft-container'>
            <div className='ft-nav'>
                <span></span>FolderView
            </div>
            <div className='ft-name'>
                <span><img src={FolderIcon} /></span>
                <span>{folderActive}</span>

            </div>
            <div className='treeview'>
                <ul id="myUL">
                    <FolderRecc folder={folderData}/>
                    

                </ul>
            </div>


        </div>
    )
}

export default FolderTree
