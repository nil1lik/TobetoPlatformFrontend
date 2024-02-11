import React from 'react';
import { GetCityItem } from '../../../models/responses/city/getCityResponse';

type Props = {
    defaultText: string;
    selectBoxArray: GetCityItem[];
    onCitySelect?: (cityId: number) => void;
    className?: string;
    name?: string;
};

const SelectBox: React.FC<Props> = (props) => {

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptionId = parseInt(event.target.value); // Seçilen option'un id'sini alın
        props.onCitySelect && props.onCitySelect(selectedOptionId);
    };

    return (
        <select name={props.name} onChange={handleSelectChange} className={`option form-control my-custom-select ${props.className}`}>
            <option disabled selected>{props.defaultText}</option>
            {props.selectBoxArray.map(element => (
                <option
                    key={element.id || String(element)}
                    value={element.id}
                    className='form-control my-custom-input'>{
                        element.name || String(element)}
                </option>
            ))}
        </select>
    );
};

export default SelectBox;
