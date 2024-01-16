import React from 'react';

type Props = {};

const ProfileEducationMap = (props: Props) => {
  return (
    <>
      <div className="timeline">
        <div className="line">
          <div className="circle">
            <div className="before">
              <div className="content">
                <ul>
                  <li>2016/2018</li>
                  <li className="text-truncate" style={{ maxWidth: '125px' }}>Lorem Ipsum Üniversitesi</li>
                  <li className="text-truncate" style={{ maxWidth: '125px' }}>Loram Ipsum Programcılığı</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="circle2">
            <div className="after">
              <div className="content">
                <ul>
                  <li>2018/2018</li>
                  <li className="text-truncate" style={{ maxWidth: '125px' }}>Lorem Şirketinde</li>
                  <li className="text-truncate" style={{ maxWidth: '125px' }}>Ipsum</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="circle2">
            <div className="after">
              <div className="content">
                <ul>
                  <li>2019/2020</li>
                  <li className="text-truncate" style={{ maxWidth: '125px' }}>Ipsum Şirketinde</li>
                  <li className="text-truncate" style={{ maxWidth: '125px' }}>Lorem</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEducationMap;
