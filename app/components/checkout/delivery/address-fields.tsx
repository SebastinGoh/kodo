import usePlacesAutocomplete from 'use-places-autocomplete';
import { Libraries, useLoadScript } from '@react-google-maps/api';

const libraries:Libraries = ['places'];

const AddressFields = () => {

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
        callbackName: 'initMap',
        requestOptions: { componentRestrictions:{ country: 'sg' } },
        debounce: 300,
        cache: 24 * 60 * 60,
    });

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
                onClick={() => {
                    setValue(description, false);
                    clearSuggestions();
                }}
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
                className='w-full rounded-lg border border-gray-300 bg-white py-3 px-6 text-lg focus:shadow-md'
                value={value}
                disabled={!ready}
                onChange={(e) => {setValue(e.target.value)}}
                placeholder='Address*'
            />
            {status === 'OK' && (
                <div className="bg-white divide-y divide-gray-100 rounded-lg shadow mt-2">
                    <ul className="py-2">
                        {renderSuggestions()}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AddressFields;