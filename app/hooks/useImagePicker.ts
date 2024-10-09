import { useState } from 'react';
import { Platform } from 'react-native';
import { launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';

type UseImagePicker = {
    image: string | null;
    pickImage: () => void;
};

const useImagePicker = (): UseImagePicker => {
    const [image, setImage] = useState<string | null>(null);

    const pickImage = () => {
        if (Platform.OS === 'web') {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = async (event: Event) => {
                const target = event.target as HTMLInputElement;
                const file = target.files?.[0];

                if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        setImage(reader.result as string);
                    };
                    reader.readAsDataURL(file);
                }
            };
            input.click();
        } else {
            launchImageLibrary({ mediaType: 'photo' }, (response: ImagePickerResponse) => {
                if (response.assets && response.assets.length > 0) {
                    setImage(response.assets[0].uri as string);
                }
            });
        }
    };

    return { image, pickImage };
};

export default useImagePicker;