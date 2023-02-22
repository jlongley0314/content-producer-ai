import axios from "axios";

const instance = axios.create({
    //baseURL: "https://devedsiprwu2-appservice01-rest.azurewebsites.net",
    baseURL: "https://devedsiprwu2-appservice06.azurewebsites.net",
});

export const pocRequests = (method, param1, param2, param3) => {
    let pocURL = "";
    switch (method) {
        //   case "getCoaches":
        //       pocURL = `/coaches`;
        //       break;
        //   case "getActScorePOCbyCoach":
        //       pocURL = `poc-by-coach/${param1}`;
        //       break;
        //   case "getActScorePOCCallbyEx":
        //       pocURL = `poc-call-by-expert/${param1}`;
        //       break;
        //   case "getActScorePOCCallbyExSnapshot":
        //       pocURL = `poc-call-by-expert-snptsht-date/${param1}/${param2}`;
        //       break;
        //   case "getActScorePOCChanges":
        //       pocURL = `action-score-summary-by-coach/${param1}/${param2}`;
        //       break;
        //   case "getSnapshotDateList":
        //       pocURL = `/shapshot-dates`;
        //       break;
        //   case "getLastSnapshotDate":
        //       pocURL = `/max-shapshot-date`;
        //       break;
        case "getUserProfile":
            pocURL = `/coaching/v1/shared/employees/employee/${param1}`;
            break;
        case "getCoachesBySite":
            pocURL = `/coaching/v1/shared/coaches-by-site/${param1}`;
            break;
        case "getExpertByCoach":
            pocURL = `/coaching/v1/shared/expert-by-coach/${param1}`;
            break;
        case "getMiaData":
            pocURL = `/coaching/v1/shared/mia/`;
            break;
        case "getExpertToDos":
            pocURL = `/dashboard/v1/widgets/my-to-do/expert/${param1}`;
            break;
        case "getOurFocus":
            pocURL = `/dashboard/v1/widgets/our-focus/${param1}`;
            break;
        case "getCoachToDos":
            pocURL = `/dashboard/v1/widgets/my-to-do/coach/${param1}`;
            break;
        case "getInstantFeedbackFormData":
            pocURL = `/coaching/v1/forms/instant-feedback/new/${param1}/${param2}/${param3}`;
            break;
        case "saveInstantFeedbackFormData":
            pocURL = `/coaching/v1/forms/instant-feedback/save`;
            break;
        case "viewInstantFeedbackFormData":
            pocURL = `/coaching/v1/forms/instant-feedback/view/${param1}/${param2}`;
            break;
        case "saveNewTeamHuddleFormData":
            pocURL = `/coaching/v1/forms/team-huddle/save`;
            break;
        case "getTeamHuddleFormData":
            pocURL = `/coaching/v1/forms/team-huddle/view/${param1}`;
            break;
        case "getExpertCoachPlans":
            pocURL = `/dashboard/v1/widgets/expert-coaching/plan/${param1}`;
            break;
        case "getExpertCoachingActivity":
            pocURL = `/dashboard/v1/widgets/expert-coaching/activity/${param1}`;
            break;
        default:
            pocURL = ``;
    }
    return pocURL;
};
export default instance;

export const commonGet = (url) => {
    return axios.get(url);
};
