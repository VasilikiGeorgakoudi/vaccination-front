import HospitalDataService from "@/services/user.service.js";

export const state = {

    hospitalData: {}

}
export const mutations = {
    SET_HOSPITAL(state, hospital) {
        state.hospitalData = hospital
    },
    EDIT_HOSPITAL(state,hospital){
        state.hospitalData = hospital
    }
}

export const actions = {
    async loadHospital({ commit }, username) {
        try {
            let response = await HospitalDataService.getHospitalData(username)
            commit('SET_HOSPITAL', response.data)
        } catch (error) {
            console.log("Couldn't load Hospital")
        }
    },
    
    async editHospital({ commit }, hospital) {
        try {
            let response = await HospitalDataService.editHospitalData(hospital)
            commit('EDIT_HOSPITAL', response.data.data)
        } catch (error) {
            console.log("Couldn't load Hospital")
            return error;
        }
    },
    loadStoreData({commit}, hospital){
        commit('LOAD_HOSPITAL', hospital)
        
    }



}
