import {LibraryServices} from "./LibraryServices";
import {Heros} from "./Heros";
import {ExploreTopBooks} from "./ExploreTopBooks";
import {MyCarousel} from "./MyCarousel";

export const HomePage = () => {
    return (
        <>
            <ExploreTopBooks/>
            <MyCarousel/>
            <Heros/>
            <LibraryServices/>
        </>
    );
}