import axiosClient from "./axiosClient"

const packageAPI = {
    
    getPackageList: async () => {
        try {
            const url = `admin/packages/`;
            const response = await axiosClient.get(url);
            return response;
        } catch (err) {
            console.log(err);
        }
    },

    renewPackage: async ({ member_id, package_id }) => {
        try {
            const url = `admin/members/${member_id}/package/`;
            const response = await axiosClient.post(url, {
                package_id: package_id
            });
            return response;
        } catch (err) {
            console.log(err);
        }
    },

    updatePackagePrice: async (prices) => {
        try {
            const url = `admin/packages/`;
            const response = await axiosClient.put(url, {
                prices: prices
            });
            return response;
        } catch (err) {
            console.log(err);
        }
    },
}

export default packageAPI;