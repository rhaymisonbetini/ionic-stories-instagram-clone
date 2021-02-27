import { Storyes } from "../models/stories.model";

export class DataBase {

    public stories: Array<Storyes> = [
        {
            userPicture:'https://i.pravatar.cc/150?img=45',
            userId: 1,
            userName: "Maria",
            currentItem: 0,
            itens: [{
                date: "há 20 minutos",
                duration: "5",
                id: "3",
                media: "https://loremflickr.com/g/320/240/paris",
                seen: true,
                type: "0",
                views: 5
            }],
            seen: true
        },

        {
            userPicture:'https://i.pravatar.cc/150?u=fake@pravatar.com',
            userId: 2,
            userName: "Flávio",
            currentItem: 0,
            seen: false,
            itens: [{
                date: "há 30 minutos",
                duration: "4",
                id: "64",
                seen: false,
                media: "https://loremflickr.com/g/320/240/paris",
                type: "0",
                views: null
            }, {
                date: "há 30 minutos",
                duration: "3",
                id: "74",
                seen: false,
                media: "https://loremflickr.com/g/320/240/paris",
                type: "0",
                views: null
            }, {
                date: "há 1 hora",
                duration: null,
                id: "84",
                media: "https://loremflickr.com/g/320/240/paris",
                seen: false,
                type: "1",
                views: null
            }]
        },

        {
            userPicture:'https://i.pravatar.cc/150?u=a042581f4e29026704d',
            userId: 1,
            userName: "Jessica",
            currentItem: 0,
            itens: [{
                date: "há 20 minutos",
                duration: "5",
                id: "3",
                media: "https://loremflickr.com/g/320/240/paris",
                seen: true,
                type: "0",
                views: 5
            }],
            seen: true
        },

        {
            userPicture:'https://i.pravatar.cc/150?img=3',
            userId: 2,
            userName: "Antonio",
            currentItem: 0,
            seen: false,
            itens: [{
                date: "há 30 minutos",
                duration: "4",
                id: "64",
                media: "https://loremflickr.com/g/320/240/paris",
                seen: false,
                type: "0",
                views: null
            }, {
                date: "há 30 minutos",
                duration: "3",
                id: "74",
                media: "https://loremflickr.com/g/320/240/paris",
                seen: false,
                type: "0",
                views: null
            }, {
                date: "há 1 hora",
                duration: null,
                id: "84",
                media: "https://loremflickr.com/g/320/240/paris",
                seen: false,
                type: "1",
                views: null
            }]
        },

        {
            userPicture:'https://i.pravatar.cc/150?img=4',
            userId: 1,
            userName: "O novato",
            currentItem: 0,
            itens: [{
                date: "há 20 minutos",
                duration: "5",
                media: "https://loremflickr.com/g/320/240/paris",
                id: "3",
                seen: true,
                type: "0",
                views: 5
            }],
            seen: true
        },

        {
            userPicture:'https://i.pravatar.cc/150?img=35',
            userId: 2,
            userName: "Rebeca",
            currentItem: 0,
            seen: false,
            itens: [{
                date: "há 30 minutos",
                duration: "4",
                id: "64",
                media: "https://loremflickr.com/g/320/240/rio",
                seen: false,
                type: "0",
                views: null
            }, {
                date: "há 30 minutos",
                duration: "3",
                id: "74",
                media: "https://loremflickr.com/g/320/240/rio",
                seen: false,
                type: "0",
                views: null
            }, {
                date: "há 1 hora",
                duration: null,
                media: "https://loremflickr.com/g/320/240/rio",
                id: "84",
                seen: false,
                type: "1",
                views: null
            }]
        },
        
        {
            userPicture:'https://i.pravatar.cc/150?img=38',
            userId: 2,
            userName: "Rebeca",
            currentItem: 0,
            seen: false,
            itens: [{
                date: "há 30 minutos",
                duration: "4",
                id: "64",
                media: "https://loremflickr.com/g/320/240/rio",
                seen: false,
                type: "0",
                views: null
            }, {
                date: "há 30 minutos",
                duration: "3",
                id: "74",
                media: "https://loremflickr.com/g/320/240/rio",
                seen: false,
                type: "0",
                views: null
            }, {
                date: "há 1 hora",
                duration: null,
                media: "https://loremflickr.com/g/320/240/rio",
                id: "84",
                seen: false,
                type: "1",
                views: null
            }]
        },
        
        {
            userPicture:'https://i.pravatar.cc/150?img=39',
            userId: 2,
            userName: "Rebeca ",
            currentItem: 0,
            seen: false,
            itens: [{
                date: "há 30 minutos",
                duration: "4",
                id: "64",
                media: "https://loremflickr.com/g/320/240/rio",
                seen: false,
                type: "0",
                views: null
            }, {
                date: "há 30 minutos",
                duration: "3",
                id: "74",
                media: "https://loremflickr.com/g/320/240/rio",
                seen: false,
                type: "0",
                views: null
            }, {
                date: "há 1 hora",
                duration: null,
                media: "https://loremflickr.com/g/320/240/rio",
                id: "84",
                seen: false,
                type: "1",
                views: null
            }]
        }
    ]

}