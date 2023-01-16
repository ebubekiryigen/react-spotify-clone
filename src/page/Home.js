import { ContentItem } from "components/items/ContentItem";
import music from "data/music";

export default function Home() {

    

    return(
        <div className="grid gap-y-8">
            <ContentItem name="sterio" title="Bu günün en çok dinlenenleri" link = "/" elementItem={music} />
        </div>
    )
}