import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";

function DetailMovieNav() {
    const { id } = useParams()
    return <DetailMovie movieId={id} />
}

export default DetailMovieNav;