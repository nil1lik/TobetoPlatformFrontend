import TobetoPlatformBannerTop from "../../utilities/tobetoPlatform/TobetoPlatformBannerTop";
import TobetoPlatformDropdown from "../../utilities/tobetoPlatform/TobetoPlatformDropdown";
import TobetoPlatformSearchBar from "../../utilities/tobetoPlatform/TobetoPlatformSearchBar";

type Props = {};

const Education = (props: Props) => {
  return (
    <>
    <TobetoPlatformBannerTop url="https://tobeto.com/_next/static/media/edu-banner3.d7dc50ac.svg" spanText="Eğitimlerim"/>
    <TobetoPlatformSearchBar/>
    <TobetoPlatformDropdown splitBtn="Tür" act1="deneme 1" act2="deneme2" act3="deneme3" />
    <TobetoPlatformDropdown splitBtn="Organizasyon" act1="deneme 1" act2="deneme2" act3="deneme3"/>
    <TobetoPlatformDropdown splitBtn="Sıralama" act1="deneme 1" act2="deneme2" act3="deneme3"/>
      </>
  );
};
export default Education;
