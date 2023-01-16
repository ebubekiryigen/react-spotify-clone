import { ContentItem } from "components/items/ContentItem"
import categories from "data/categories"
import userFavCategories from "data/userFavCategories"


export default function Search() {
    return(
        <>
            <ContentItem name="user" title="En çok dinlediğin türler" elementItem={userFavCategories} />
            <ContentItem name="category" title="Hepsine göz at" elementItem={categories} />
        </>
    )
}