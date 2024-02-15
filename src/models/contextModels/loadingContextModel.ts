export interface LoadingContextModel {
    loading: number;
    handleSetLoading: (value: number | ((prev: number) => number)) => void;
}