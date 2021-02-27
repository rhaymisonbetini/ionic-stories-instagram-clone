
type userPicture = string;
type userId = number | string;
type userName = string;
type currentItem = number;
type seen = Boolean;


export interface Storyes {
    userPicture: userPicture;
    userId: userId;
    userName: userName;
    currentItem: currentItem
    seen: seen
    itens: Array<any>
}
