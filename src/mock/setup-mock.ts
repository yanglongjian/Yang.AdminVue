export default ({ mock, setup }: { mock?: boolean; setup: () => void }) => {
    setup();
  };
  
  export const successResponseWrap = (data: unknown) => {
    return  {
      statusCode: 200,
      data,
      succeeded: true,
      errors:null,
      extras: null,
      timestamp: new Date().getTime(),
    }
  };
  
  export const failResponseWrap = (errors: string) => {
    return {
      data: null,
      succeeded: false,
      errors,
      extras:null,
      timestamp:new Date().getTime(),
      statusCode:400,
    };
  };
  