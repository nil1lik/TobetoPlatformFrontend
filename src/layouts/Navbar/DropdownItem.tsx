import React from "react";
import { Dropdown } from "react-bootstrap";

type Props = {};

const DropdownItem = (props: Props) => {
  return (
    <div>
      {/* 
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Nil Firdevs Birlik
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Profil Bilgileri</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-2">Oturumu Kapat</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
      <Dropdown>
        <div className="d-none d-xxl-block">
          <div className="d-flex justify-space-between align-items-center">
            <div className="mx-3 gap-1em align-items-center d-flex">
              <span className="tbt-gradient"></span>
            </div>
            <div className="btn-group header-avatar">
            <Dropdown.Toggle className="bg-transparent">
                <button
                  type="button"
                  className="btn p-0 fw-normal b-r-35 text-end d-flex align-items-center"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  <div className="me-2">
                    <span className="dropdown-pp">
                      <span className="dropdown-pp-2">
                        <img
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2736%27%20height=%2736%27/%3e"
                          className="dropdown-pp-img"
                        ></img>
                      </span>
                      <img
                        alt=""
                        src="/images/tobetouserlogo.png"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="dropdown-pp-img-2 cv-pp-img"
                      ></img>
                    </span>
                  </div>
                  <div className="me-3">
                    <p className="mb-0 name">Nil Firdevs Birlik</p>
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
                </button>
                </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/profilim" className="dropdown-item profil-dropdown">
                    Profil Bilgileri
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2">
                  <a className="dropdown-item profil-dropdown" href="#">
                    Oturumu Kapat
                  </a>
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
