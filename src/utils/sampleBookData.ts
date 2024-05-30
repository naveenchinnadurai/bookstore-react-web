const sampleBook = [
    {
        kind: "books#volume",
        id: "1",
        etag: "etag",
        selfLink: "https://www.googleapis.com/books/v1/volumes/1",
        volumeInfo: {
            title: "Sample Book Title",
            authors: ["Author One", "Author Two"],
            publisher: "Sample Publisher",
            publishedDate: "2021-01-01",
            description: "This is a sample description of the book.",
            industryIdentifiers: [
                {
                    type: "ISBN_10",
                    identifier: "1234567890",
                },
                {
                    type: "ISBN_13",
                    identifier: "1234567890123",
                },
            ],
            pageCount: 300,
            categories: ["Category One", "Category Two"],
            averageRating: 4.5,
            ratingsCount: 20,
            imageLinks: {
                smallThumbnail: "http://books.google.com/books/content?id=1&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                thumbnail: "http://books.google.com/books/content?id=1&printsec=frontcover&img=1&zoom=1&source=gbs_api",
            },
            language: "en",
            previewLink: "http://books.google.com/books?id=1&dq=isbn:1234567890123&hl=&source=gbs_api",
            infoLink: "http://books.google.com/books?id=1&dq=isbn:1234567890123&hl=&source=gbs_api",
            canonicalVolumeLink: "https://books.google.com/books/about/Sample_Book_Title.html?hl=&id=1",
        },
        saleInfo: {
            country: "US",
            saleability: "NOT_FOR_SALE",
            isEbook: false,
        },
        accessInfo: {
            country: "US",
            viewability: "PARTIAL",
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
                isAvailable: false,
            },
            pdf: {
                isAvailable: false,
            },
            webReaderLink: "http://play.google.com/books/reader?id=1&hl=&printsec=frontcover&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false,
        },
    }
]
