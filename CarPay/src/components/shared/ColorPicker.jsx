// src/components/shared/ColorPicker.jsx
import { HexColorPicker } from 'react-colorful'

const ColorPicker = ({ value, onChange }) => {
    return (
        <div className="flex flex-col gap-2">
            <HexColorPicker color={value} onChange={onChange} />
            <div className="flex items-center gap-2">
                <div
                    className="w-6 h-6 rounded border"
                    style={{ backgroundColor: value }}
                />
                <span className="text-sm font-mono">{value}</span>
            </div>
        </div>
    )
}

export default ColorPicker
