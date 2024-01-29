import axios, {AxiosResponse} from "axios";

export class BaseService<
	GetAllType,
	GetByIdType,
	AddRequestType,
	AddResponseType,
	UpdateRequestType,
	UpdateResponseType,
> {
	public apiUrl: string;
	public dtoUrl?: string;

	constructor() {
		this.apiUrl = "";
		this.dtoUrl ="";
	}

	getAll(pageIndex: number, pageSize: number): Promise<AxiosResponse<GetAllType, any>> {
		return axios.get<GetAllType>(this.apiUrl+`?PageIndex=${pageIndex}&PageSize=${pageSize}`);
	}

	getById(id: number): Promise<AxiosResponse<GetByIdType, any>> {
		console.log(this.apiUrl + "/" + id);
		return axios.get<GetByIdType>(this.apiUrl + "/" + id);
	}

	add(request: AddRequestType): Promise<AxiosResponse<AddResponseType, any>> {
		return axios.post<AddResponseType>(this.apiUrl, request);
	}

	update(
		request: UpdateRequestType,
	): Promise<AxiosResponse<UpdateResponseType, any>> {
		return axios.put<UpdateResponseType>(this.apiUrl, request);
	}

	delete(id: number) {
		return axios.delete(this.apiUrl + "/" + id);
	}
}

