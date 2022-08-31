import axios from "axios"

export const GetImage = async (_req: any, res: any) => {
    try {
        const imageUrl = await axios.get("https://www.flickr.com/services/feeds/photos_public.gne?format=json")

        let images: any;
        images = imageUrl.data
        images = images.slice(15, images.length - 1)
        images = JSON.parse(images)

        res.status(200).json({
            message: 'success',
            data: images
          })

    } catch (e: any) {
        res.status(500).json({
            message: e.message
          })
    }
}