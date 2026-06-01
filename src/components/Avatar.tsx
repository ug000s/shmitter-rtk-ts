import { useAppDispatch, useAppSelector } from "../app/hooks.ts";
import { changeAvatar, changeName } from "../features/user/userSlice.ts";

interface AvatarProps {
    size?: 'small';
}

const Avatar = ({size}: AvatarProps) => {
    const {name, avatar} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    return (
        <img
            onClick={() => {
                const url = prompt('Enter avatar url');
                dispatch(changeAvatar(url));
            }}
            onContextMenu={e => {
                e.preventDefault();
                const newName = prompt('Enter new name');
                dispatch(changeName(newName));
            }}
            className={`user-avatar ${size ?? ''}`}
            src={avatar}
            alt={name}
        />
    )
}

export default Avatar;