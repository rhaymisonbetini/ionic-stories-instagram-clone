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
                media: "data:image/jpeg;base64,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",
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
                media: "data:image/jpeg;base64,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",
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