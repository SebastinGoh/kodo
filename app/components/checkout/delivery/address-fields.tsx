import usePlacesAutocomplete from 'use-places-autocomplete';
import { Libraries, useLoadScript } from '@react-google-maps/api';
import { ChangeEvent } from 'react';

const libraries:Libraries = ['places'];

type Props = {
    setAddress: (address: string) => void;
};
  
const AddressFields: React.FC<Props> = (
    {setAddress}
) => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
        libraries,
      });
    
    const {
        ready,
        value,
        suggestions: {status, data},
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        callbackName: '',
        requestOptions: { componentRestrictions:{ country: 'sg' } },
        debounce: 300,
        cache: 24 * 60 * 60,
    });

    function handleSelect(description: string) {
        setValue(description, false);
        setAddress(description);
        clearSuggestions();
    }

    function handleAddressChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
        setAddress(event.target.value);
    }
    const renderSuggestions = () => {
        return data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
                description,
        } = suggestion;

        return (
            <li
                key={place_id}
                onClick={() => handleSelect(description)}
                className='block px-4 py-2 hover:bg-gray-100'
            >
                <strong>{main_text}</strong> <small>{secondary_text}</small>
            </li>
        );
        });
    };
    return (
        <div className='w-full'>
            <input
                id='address'
                className='w-full h-11 text-lg px-3 border-transparent focus:border-transparent peer'
                value={value}
                onChange={handleAddressChange}
                placeholder=' '
            />
            <div className="border-beige absolute top-full transition-all duration-300 bg-beige w-0 h-1 peer-focus:w-full"></div>
            {status === 'OK' && (
                <div className="bg-white rounded-md shadow mt-2 fixed z-40">
                    <ul className="h-40 overflow-y-auto rounded-lg">
                        {renderSuggestions()}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AddressFields;