import axios from "axios";
import { HttpMethod } from "../types/HttpMethods.type";

const mainAddress = 'http://localhost:3000';

export const HttpClient = async <TData>(method: HttpMethod, url: string, data: TData) => {

    try {

      url = url.replace(/^\//, '');

      const response = await axios({
          method: method,
          url: `${mainAddress}/${url}`,
          data: data
      });
      return response.data;
    }catch(error: unknown){
        if (error instanceof Error) {
            console.log(error);
            return {
              message: `Things exploded (${error.message})`,
            };
          }
    }

}