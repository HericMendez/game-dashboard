const igdbMockData = [
    {
      id: 1,
      name: "The Legend of Zelda: Breath of the Wild",
      summary: "An open-world action-adventure game where players control Link in his quest to defeat Calamity Ganon and save Hyrule.",
      release_dates: [
        {
          id: 1001,
          human: "2017-03-03",
          date: 1488499200,
          platform: {
            id: 41,
            name: "Nintendo Switch"
          }
        },
        {
          id: 1002,
          human: "2017-03-03",
          date: 1488499200,
          platform: {
            id: 130,
            name: "Wii U"
          }
        }
      ],
      genres: [
        {
          id: 31,
          name: "Adventure"
        },
        {
          id: 12,
          name: "Role-playing (RPG)"
        }
      ],
      platforms: [
        {
          id: 41,
          name: "Nintendo Switch"
        },
        {
          id: 130,
          name: "Wii U"
        }
      ],
      cover: {
        id: 2001,
        url: "//images.igdb.com/igdb/image/upload/t_cover_big/breath_of_the_wild.jpg",
        width: 264,
        height: 352
      },
      screenshots: [
        {
          id: 3001,
          url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/zelda_screenshot1.jpg"
        }
      ],
      videos: [
        {
          id: 4001,
          video_id: "zw47_q9wbBE",
          name: "Breath of the Wild Trailer",
          url: "https://www.youtube.com/watch?v=zw47_q9wbBE"
        }
      ],
      rating: 97.0,
      rating_count: 4550,
      involved_companies: [
        {
          id: 5001,
          company: {
            id: 70,
            name: "Nintendo"
          },
          developer: true,
          publisher: true
        }
      ]
    },
    {
      id: 2,
      name: "The Witcher 3: Wild Hunt",
      summary: "An action RPG set in a detailed fantasy world where players control Geralt of Rivia, a monster hunter on a quest to find his adopted daughter.",
      release_dates: [
        {
          id: 1003,
          human: "2015-05-19",
          date: 1431993600,
          platform: {
            id: 6,
            name: "PC"
          }
        },
        {
          id: 1004,
          human: "2015-05-19",
          date: 1431993600,
          platform: {
            id: 48,
            name: "PlayStation 4"
          }
        },
        {
          id: 1005,
          human: "2015-05-19",
          date: 1431993600,
          platform: {
            id: 49,
            name: "Xbox One"
          }
        }
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)"
        },
        {
          id: 31,
          name: "Adventure"
        }
      ],
      platforms: [
        {
          id: 6,
          name: "PC"
        },
        {
          id: 48,
          name: "PlayStation 4"
        },
        {
          id: 49,
          name: "Xbox One"
        }
      ],
      cover: {
        id: 2002,
        url: "//images.igdb.com/igdb/image/upload/t_cover_big/witcher3.jpg",
        width: 264,
        height: 352
      },
      screenshots: [
        {
          id: 3002,
          url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/witcher3_screenshot1.jpg"
        }
      ],
      videos: [
        {
          id: 4002,
          video_id: "c0i88t0Kacs",
          name: "The Witcher 3 Trailer",
          url: "https://www.youtube.com/watch?v=c0i88t0Kacs"
        }
      ],
      rating: 93.0,
      rating_count: 8123,
      involved_companies: [
        {
          id: 5002,
          company: {
            id: 101,
            name: "CD Projekt Red"
          },
          developer: true,
          publisher: true
        }
      ]
    },
    {
      id: 3,
      name: "Red Dead Redemption 2",
      summary: "An open-world Western game set in a meticulously recreated 19th-century America where players take on the role of outlaw Arthur Morgan.",
      release_dates: [
        {
          id: 1006,
          human: "2018-10-26",
          date: 1540512000,
          platform: {
            id: 6,
            name: "PC"
          }
        },
        {
          id: 1007,
          human: "2018-10-26",
          date: 1540512000,
          platform: {
            id: 48,
            name: "PlayStation 4"
          }
        },
        {
          id: 1008,
          human: "2018-10-26",
          date: 1540512000,
          platform: {
            id: 49,
            name: "Xbox One"
          }
        }
      ],
      genres: [
        {
          id: 31,
          name: "Adventure"
        },
        {
          id: 5,
          name: "Action"
        }
      ],
      platforms: [
        {
          id: 6,
          name: "PC"
        },
        {
          id: 48,
          name: "PlayStation 4"
        },
        {
          id: 49,
          name: "Xbox One"
        }
      ],
      cover: {
        id: 2003,
        url: "//images.igdb.com/igdb/image/upload/t_cover_big/red_dead_redemption2.jpg",
        width: 264,
        height: 352
      },
      screenshots: [
        {
          id: 3003,
          url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/red_dead_screenshot1.jpg"
        }
      ],
      videos: [
        {
          id: 4003,
          video_id: "eaW0tYpxyp0",
          name: "Red Dead Redemption 2 Trailer",
          url: "https://www.youtube.com/watch?v=eaW0tYpxyp0"
        }
      ],
      rating: 96.0,
      rating_count: 9432,
      involved_companies: [
        {
          id: 5003,
          company: {
            id: 2,
            name: "Rockstar Games"
          },
          developer: true,
          publisher: true
        }
      ]
    },
    {
      id: 4,
      name: "Cyberpunk 2077",
      summary: "A futuristic open-world RPG set in the dystopian Night City, where players take on the role of a mercenary named V.",
      release_dates: [
        {
          id: 1009,
          human: "2020-12-10",
          date: 1607558400,
          platform: {
            id: 6,
            name: "PC"
          }
        },
        {
          id: 1010,
          human: "2020-12-10",
          date: 1607558400,
          platform: {
            id: 48,
            name: "PlayStation 4"
          }
        },
        {
          id: 1011,
          human: "2020-12-10",
          date: 1607558400,
          platform: {
            id: 49,
            name: "Xbox One"
          }
        }
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)"
        },
        {
          id: 5,
          name: "Action"
        }
      ],
      platforms: [
        {
          id: 6,
          name: "PC"
        },
        {
          id: 48,
          name: "PlayStation 4"
        },
        {
          id: 49,
          name: "Xbox One"
        }
      ],
      cover: {
        id: 2004,
        url: "//images.igdb.com/igdb/image/upload/t_cover_big/cyberpunk_2077.jpg",
        width: 264,
        height: 352
      },
      screenshots: [
        {
          id: 3004,
          url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/cyberpunk_screenshot1.jpg"
        }
      ],
      videos: [
        {
          id: 4004,
          video_id: "8X2kIfS6fb8",
          name: "Cyberpunk 2077 Trailer",
          url: "https://www.youtube.com/watch?v=8X2kIfS6fb8"
        }
      ],
      rating: 85.0,
      rating_count: 7230,
      involved_companies: [
        {
          id: 5004,
          company: {
            id: 101,
            name: "CD Projekt Red"
          },
          developer: true,
          publisher: true
        }
      ]
    },
    {
      id: 5,
      name: "Hades",
      summary: "A rogue-like dungeon crawler where players control Zagreus, son of Hades, as he tries to escape the Underworld.",
      release_dates: [
        {
          id: 1012,
          human: "2020-09-17",
          date: 1600300800,
          platform: {
            id: 6,
            name: "PC"
          }
        },
        {
          id: 1013,
          human: "2020-09-17",
          date: 1600300800,
          platform: {
            id: 130,
            name: "Nintendo Switch"
          }
        }
      ],
      genres: [
        {
          id: 25,
          name: "Rogue-like"
        },
        {
          id: 5,
          name: "Action"
        }
      ],
      platforms: [
        {
          id: 6,
          name: "PC"
        },
        {
          id: 130,
          name: "Nintendo Switch"
        }
      ],
      cover: {
        id: 2005,
        url: "//images.igdb.com/igdb/image/upload/t_cover_big/hades.jpg",
        width: 264,
        height: 352
      },
      screenshots: [
        {
          id: 3005,
          url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/hades_screenshot1.jpg"
        }
      ],
      videos: [
        {
          id: 4005,
          video_id: "n4ptqRjGhFw",
          name: "Hades Trailer",
          url: "https://www.youtube.com/watch?v=n4ptqRjGhFw"
        }
      ],
      rating: 94.0,
      rating_count: 5129,
      involved_companies: [
        {
          id: 5005,
          company: {
            id: 1401,
            name: "Supergiant Games"
          },
          developer: true,
          publisher: true
        }
      ]
    }
  ];
   
  export default igdbMockData