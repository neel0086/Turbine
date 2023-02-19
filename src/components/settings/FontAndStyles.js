import React, { useContext } from 'react'
import { ProviderContext } from '../../context/Provider'
import './Settings.css'

function FontAndStyles() {

    const {
        fontVal,
        setFontVal,
        fontStyle,
        setFontStyle,
    } = useContext(ProviderContext)
    return (
        <div className='fs-container'>
            <div className='fs-section'>
<<<<<<< HEAD

                <p className='sub-name'>Font-Size</p>
                <p className='sub-desc'>Font size in pixels</p>
                <input type='text' className='fs-inp' onChange={(e) => setFontVal(e.target.value)} />
=======
                
                <p className='sub-name'>Font-Size</p>
                <p className='sub-desc'>Font size in pixels</p>
                <input type='number' className='fs-inp'/>
>>>>>>> a17fcd9d38c7024bd8d869a84ff491c83ac0b9ed

            </div>
            <div className='fs-section'>
                <p className='sub-name'>Font-Family</p>
                <p className='sub-desc'>Font family for editor</p>
<<<<<<< HEAD
                {/* <input type='text' list="font_styles" className='fs-inp' /> */}
                <select className='fs-inp' id="font_styles" onChange={(e) => setFontStyle(e.target.value)}>
                    <option value="Consolas">Consolas</option>
                    <option value="Courier New">Courier New</option>
                    <option value="monospace">monospace</option>
                    <option value="tahoma">tahoma</option>
                    <option value="JetBrains Mono">JetBrains Mono</option>
                    <option value="Monaco">Monaco</option>
                </select>
=======
                <input type='text' list="font_styles" className='fs-inp'/>
                <datalist id="font_styles">
                    <option>Volvo</option>
                    <option>Saab</option>
                    <option>Mercedes</option>
                    <option>Audi</option>
                </datalist>
>>>>>>> a17fcd9d38c7024bd8d869a84ff491c83ac0b9ed

            </div>

        </div>
    )
}

export default FontAndStyles
