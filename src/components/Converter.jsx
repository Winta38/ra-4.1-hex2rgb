import { useState } from "react";

export default function Converter() {
    const [hex, setHex] = useState('')

    const handleChange = (event) => {
        const { value } = event.target
        if (value.length === 7) {
            const result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
            if (result === null) {
                setHex('Error');
                return
            }
            const rgb = `${parseInt(result[1], 16)},
          ${parseInt(result[2], 16)},
          ${parseInt(result[3], 16)}`;
            setHex(`rgb(${rgb})`);
        } else if (value.length > 7) {
            setHex('Error');
            return
        }
    }

    return <div className='container' style={{ background: hex }}>
        <input className='converter' type="text" onChange={handleChange} />
        <div className='result'>{hex}</div>
    </div>
}