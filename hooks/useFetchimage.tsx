import { useState, useEffect } from "react";
import { Image } from "react-native";

export function useFetchimage () {
    const [image, setImage] = useState<ImageItem[]>([]);

    interface ImageItem {
        id: number;
        url: string;
        title: string;
}

    useEffect (() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res) => res.json())
        .then((data: ImageItem[]) => setImage(data))
    }, [])
    return {image};
}