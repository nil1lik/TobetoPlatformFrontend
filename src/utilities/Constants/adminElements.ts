import AdminDashboard from "../../components/AdminDashboard/AdminDashboard";
import AdminUsers from "../../components/AdminDashboard/AdminUsers";
import AdminEducations from "../../components/AdminDashboard/AdminEducations";
import AdminAnnouncements from "../../components/AdminDashboard/AdminAnnouncements";
import AdminCourses from "../../components/AdminDashboard/AdminCourses";
import AdminExams from "../../components/AdminDashboard/AdminExams";
import AdminCalendar from "../../components/AdminDashboard/AdminCalendar";

export interface ComponentMap {
  [key: string]: React.ComponentType<any>;
}

export const componentMap: ComponentMap = {
  dashboard: AdminDashboard,
  kullanicilar: AdminUsers,
  egitimler: AdminEducations,
  duyurular: AdminAnnouncements,
  kurslar: AdminCourses,
  sinavlar: AdminExams,
  takvim: AdminCalendar
};

export const adminElements = [
    { name: "Dashboard", value: "dashboard" },
    { name: "Kullanıcılar", value: "kullanicilar" },
    { name: "Eğitimler", value: "egitimler" },
    { name: "Duyurular", value: "duyurular" },
    { name: "Kurslar", value: "kurslar" },
    { name: "Sınavlar", value: "sinavlar" },
    { name: "Takvim", value: "takvim" },
];

export const adminIconClassList: string[] =
    [
        "bi-box-fill",
        "bi-person-circle",
        "bi-laptop",
        "bi bi-card-text",
        "bi-marker-tip",
        "bi-patch-question-fill",
        "bi-calendar-date",
    ]