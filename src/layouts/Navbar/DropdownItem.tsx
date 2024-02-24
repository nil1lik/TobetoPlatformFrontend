import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { GetByUserId } from "../../models/responses/user/getByUserId";
import { useAuthContext } from "../../contexts/AuthContext";
import userProfileService from "../../services/userProfileService";

type Props = {};

const DropdownItem = (props: Props) => {
  const tobetoUserLogo = process.env.PUBLIC_URL + "https://res.cloudinary.com/dcpbbqilg/image/upload/v1707396717/tobeto-logo_t2qnpq.png";
  const [user, setUser] = useState<GetByUserId>()
  const { userId} = useAuthContext();

  const fethUserData = async (userId:number) => {
    const result = await userProfileService.getByUserId(userId)
    setUser(result.data)
  }

  useEffect(() => {
    fethUserData(Number(userId))
  }, [userId])
  
  
  return (
    <div>
      <Dropdown>
        <div className="d-xxl-block">
          <div className="d-flex justify-space-between">
            <div className="mx-3 gap-1em d-flex">
              <span className="tbt-gradient"></span>
            </div>
            <div className="btn-group header-avatar">
              <Dropdown.Toggle className="bg-transparent p-0 fw-normal b-r-35 text-end d-flex dropdown-toggle-navbar btn-navbar align-items-center">
                <div className="me-2">
                    <span className="dropdown-pp-2">
                      <img
                        alt=""
                        aria-hidden="true"
                        src="https://res.cloudinary.com/dcpbbqilg/image/upload/v1708374477/tobetouserlogo_aekd7i.png"
                        className="dropdown-pp-img"
                      ></img>
                    </span>
                </div>
                <div className="me-3">
                  <p className="mb-0 name">{user?.firstName}  {user?.lastName}</p>
                </div>
                <span>
                  <svg
                    xmlns="/images/navbar-dropdown-toggle.svg"
                    width={20}
                    height={20}
                    viewBox="5 3 20 20"
                    fill="none"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#828282"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className=" dropdown-trans dropdown-menu-navbar">
                <Dropdown.Item
                  href="/profilim"
                  className="dropdown-item profil-dropdown-navbar"
                >
                  Profil Bilgileri
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  href="/giris"
                  className="dropdown-item profil-dropdown-navbar"
                >
                  Oturumu Kapat
                </Dropdown.Item>
              </Dropdown.Menu>
            </div>
          </div>
        </div>
      </Dropdown>
    </div>
  );
};

export default DropdownItem;
