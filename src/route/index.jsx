import Home from "../page/home";
import NotFound from "../page/notFound";
import { path } from "./path";

export const route = {
    home: {
        path : path.home,
        element : <Home />
    },
    notFound: {
        path : path.notFound,
        element : <NotFound />
    }
}