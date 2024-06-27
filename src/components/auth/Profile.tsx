
export type ProfilePropsType = {
    name: string
}
const Profile = ({ name }: ProfilePropsType) => {
    return (
        <div>Profile - {name}</div>
    )
}

export default Profile