import { Container } from "react-bootstrap";
import ProfileEditSidebar from "../../layouts/ProfileEditSidebar/ProfileEditSidebar";

type Props = {};

const ProfileEdit = (props: Props) => {
  return (
    <div className="profile-edit">
      <ProfileEditSidebar />
      <Container></Container>
    </div>
  );
};

export default ProfileEdit;
