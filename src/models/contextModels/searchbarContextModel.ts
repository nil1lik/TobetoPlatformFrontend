export interface SearchbarContextModel {
    searchbarValue: string;
    handleSearchbarChange: (value: string) => void;
    searchbarFocus: boolean;
    searchbarBlur: boolean;
    toggleFocusAndBlurState: () => void;
}