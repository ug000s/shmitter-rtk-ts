import Avatar from "./Avatar.tsx";   
import {changeStats} from "../features/stats/statsSlice.ts";
import { useAppSelector, useAppDispatch } from "../app/hooks.ts";
// import {shallowEqual} from "react-redux";

const Stats = () => {
    const {name} = useAppSelector(state => state.user);
    const {followers, following} = useAppSelector(state => state.stats);
    // shallowEqual is used to compare the previous and next values of the state. If they are the same, the component will not re-render.
    // const {user, stats} = useSelector(state => ({
    //     user: state.user,
    //     stats: state.stats
    // }),shallowEqual);

    const dispatch = useAppDispatch();

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar />
                {name}
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => dispatch(changeStats('followers', 1))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStats('followers', -1))
                    }}
                >Followers: {followers}</div>
                <div
                    onClick={() => dispatch(changeStats('following', 1))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStats('following', -1))
                    }}
                >Following: {following}</div>
            </div>
        </div>
    )
}

export default Stats;