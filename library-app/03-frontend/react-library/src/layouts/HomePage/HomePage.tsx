import {LibraryServices} from "./LibraryServices";
import {Heros} from "./Heros";
import {Carousel} from "./Carousel";
import {ExploreTopBooks} from "./ExploreTopBooks";

export const HomePage = () => {
    return (
        <>
            <ExploreTopBooks/>
            <Carousel/>
            <Heros/>
            <LibraryServices/>
        </>
    );
}