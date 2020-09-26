export interface ExpenseComponentprops {
    title : string
  }

export interface data {
      Income: number;
      categories: {
      title: string;
      click: boolean;
      expenses: expense[];
  }[];
}

export interface expense{
  date: string, expense: string;
} 

export interface state{
  data : data
}

export interface appStateContextProps{
  state : data;
  dispatch: any;
}

export interface Action{
  type: string;
  payload: {
    text: string;
  }
}

export interface categoryProps {
  text : string
}