/*
 * Red Sox checklists: Topps and Bowman, 1950–1965.
 *
 * Each set:
 *   id      unique slug, used in collection keys and URLs. Never change an id
 *           after you've started tracking cards, or saved data won't match.
 *   year, brand, name
 *   verify  optional. Shown on the page when a list may be incomplete.
 *   cards   [cardNumber, playerName, note?]
 *
 * Card numbers are strings so variants like "66a" work.
 * Team sets follow the common hobby convention: player, team, manager,
 * coach, all-star and Red Sox-only combo cards. Multi-team league leader
 * and rookie cards are not included.
 */
window.CHECKLISTS = [
  {
    id: "1950-bowman", year: 1950, brand: "Bowman", name: "1950 Bowman",
    cards: [
      ["1", "Mel Parnell"], ["2", "Vern Stephens"], ["3", "Dom DiMaggio"],
      ["43", "Bobby Doerr"], ["44", "Joe Dobson"], ["45", "Al Zarilla"],
      ["97", "Maurice McDermott"], ["98", "Ted Williams"], ["99", "Billy Goodman"],
      ["136", "Buddy Rosar"], ["137", "Johnny Pesky"], ["152", "Ellis Kinder"],
      ["153", "Walt Masterson"], ["186", "Ken Keltner"], ["187", "Lou Stringer"],
      ["188", "Earl Johnson"], ["245", "Al Papai"], ["246", "Walt Dropo"]
    ]
  },
  {
    id: "1951-bowman", year: 1951, brand: "Bowman", name: "1951 Bowman",
    verify: "Most team-set references list 19 Red Sox cards. 17 are confirmed here; check a full set checklist for the rest.",
    cards: [
      ["15", "Johnny Pesky"], ["16", "Maurice McDermott"], ["38", "Al Evans"],
      ["39", "Ray Scarborough"], ["62", "Lou Boudreau"], ["91", "Clyde Vollmer"],
      ["92", "Vern Stephens"], ["128", "Ellis Kinder"], ["129", "Matt Batts"],
      ["164", "Bill Wight"], ["165", "Ted Williams"], ["210", "Les Moss"],
      ["236", "Buddy Rosar"], ["237", "Billy Goodman"], ["270", "Willard Nixon"],
      ["306", "Jim Piersall"], ["307", "Walt Masterson"]
    ]
  },
  {
    id: "1951-topps-red", year: 1951, brand: "Topps", name: "1951 Topps Red Backs",
    cards: [
      ["4", "Vern Stephens"], ["10", "Mel Parnell"], ["20", "Dom DiMaggio"],
      ["42", "Ray Scarborough"], ["43", "Maurice McDermott"], ["46", "Billy Goodman"]
    ]
  },
  {
    id: "1951-topps-blue", year: 1951, brand: "Topps", name: "1951 Topps Blue Backs",
    cards: [
      ["5", "Johnny Pesky"], ["37", "Bobby Doerr"]
    ]
  },
  {
    id: "1952-bowman", year: 1952, brand: "Bowman", name: "1952 Bowman",
    cards: [
      ["9", "Vern Stephens"], ["25", "Maurice McDermott"], ["45", "Johnny Pesky"],
      ["57", "Clyde Vollmer"], ["81", "Billy Goodman"], ["106", "Randy Gumpert"],
      ["117", "Bill Wight"], ["129", "Gus Niarhos"], ["140", "Ray Scarborough"],
      ["153", "Fred Hatfield"], ["169", "Walt Dropo"], ["189", "Jim Piersall"],
      ["205", "Walt Masterson"], ["225", "Del Wilber"], ["241", "Mel Parnell"],
      ["250", "Ike Delock"]
    ]
  },
  {
    id: "1952-topps", year: 1952, brand: "Topps", name: "1952 Topps",
    cards: [
      ["4", "Don Lenhardt"], ["15", "Johnny Pesky"], ["22", "Dom DiMaggio"],
      ["23", "Billy Goodman"], ["30", "Mel Parnell"], ["43", "Ray Scarborough"],
      ["54", "Leo Kiely"], ["72", "Karl Olson"], ["78", "Ellis Kinder"],
      ["84", "Vern Stephens"], ["119", "Maurice McDermott"], ["121", "Gus Niarhos"],
      ["139", "Ken Wood"], ["152", "Al Evans"], ["177", "Bill Wight"],
      ["180", "Charley Maxwell"], ["186", "Walt Masterson"], ["235", "Walt Dropo"],
      ["247", "Randy Gumpert"], ["255", "Clyde Vollmer"], ["269", "Willard Nixon"],
      ["327", "Archie Wilson", "High number"], ["329", "Ike Delock", "High number"],
      ["335", "Ted Lepcio", "High number"], ["343", "Dick Gernert", "High number"],
      ["345", "Sammy White", "High number"], ["374", "Al Benton", "High number"],
      ["376", "Faye Throneberry", "High number"], ["383", "Del Wilber", "High number"],
      ["404", "Dick Brodowski", "High number"]
    ]
  },
  {
    id: "1953-bowman-color", year: 1953, brand: "Bowman", name: "1953 Bowman Color",
    cards: [
      ["25", "Hoot Evers"], ["35", "Maurice McDermott"], ["41", "Sammy White"],
      ["57", "Lou Boudreau", "Manager"], ["61", "George Kell"], ["66", "Mel Parnell"],
      ["123", "Johnny Lipon"], ["148", "Billy Goodman"]
    ]
  },
  {
    id: "1953-bowman-bw", year: 1953, brand: "Bowman", name: "1953 Bowman Black & White",
    verify: "Built from partial sources. Confirm against a full checklist before relying on it.",
    cards: [
      ["2", "Willard Nixon"], ["11", "Dick Gernert"], ["24", "Del Wilber"],
      ["29", "Sid Hudson"], ["36", "Jim Piersall"], ["49", "Floyd Baker"]
    ]
  },
  {
    id: "1953-topps", year: 1953, brand: "Topps", name: "1953 Topps",
    cards: [
      ["18", "Ted Lepcio"], ["19", "Mel Parnell"], ["30", "Willard Nixon"],
      ["32", "Clyde Vollmer"], ["40", "Johnny Lipon"], ["44", "Ellis Kinder"],
      ["49", "Faye Throneberry"], ["55", "Maurice McDermott"], ["63", "Gus Niarhos"],
      ["69", "Dick Brodowski"], ["94", "Bill Kennedy"], ["138", "George Kell"],
      ["139", "Sammy White"], ["149", "Dom DiMaggio"], ["169", "Dizzy Trout"],
      ["170", "Bill Werle"], ["181", "Al Zarilla"], ["184", "Hal Brown"],
      ["248", "Gene Stephens", "High number"], ["251", "Sid Hudson", "High number"],
      ["280", "Milt Bolling", "High number"]
    ]
  },
  {
    id: "1954-bowman", year: 1954, brand: "Bowman", name: "1954 Bowman",
    cards: [
      ["2", "Jackie Jensen"], ["18", "Hoot Evers"], ["34", "Sammy White"],
      ["50", "George Kell"], ["66a", "Ted Williams", "Pulled from the set"],
      ["66b", "Jim Piersall", "Replacement for #66"], ["82", "Billy Goodman"],
      ["98", "Ellis Kinder"], ["114", "Willard Nixon"], ["130", "Milt Bolling"],
      ["146", "Dick Gernert"], ["162", "Ted Lepcio"], ["178", "Del Wilber"],
      ["194", "Sid Hudson"], ["210", "Jim Piersall"]
    ]
  },
  {
    id: "1954-topps", year: 1954, brand: "Topps", name: "1954 Topps",
    cards: [
      ["1", "Ted Williams"], ["40", "Mel Parnell"], ["47", "Ellis Kinder"],
      ["66", "Ted Lepcio"], ["80", "Jackie Jensen"], ["82", "Milt Bolling"],
      ["93", "Sid Hudson"], ["133", "Del Baker", "Coach"], ["144", "Bill Werle"],
      ["171", "Leo Kiely"], ["172", "Hal Brown"], ["186", "Karl Olson"],
      ["195", "Billy Consolo"], ["217", "Paul Schreiber", "Coach"],
      ["221", "Dick Brodowski"], ["227", "Buster Mills", "Coach"],
      ["250", "Ted Williams"]
    ]
  },
  {
    id: "1955-bowman", year: 1955, brand: "Bowman", name: "1955 Bowman",
    verify: "Built from partial sources and may be missing a few cards. Confirm against a full checklist.",
    cards: [
      ["15", "Frank Sullivan"], ["16", "Jim Piersall"], ["47", "Sammy White"],
      ["48", "Milt Bolling", "Error and corrected back versions exist"],
      ["126", "Billy Goodman"], ["147", "Sam Mele"], ["150", "Billy Klaus"],
      ["177", "Willard Nixon"], ["178", "Tom Brewer"], ["221", "Hal Brown"],
      ["222", "Russ Kemmerer"], ["256", "Owen Friend"], ["264", "Bill Henry"],
      ["290", "Hershell Freeman"], ["302", "Frank Malzone"], ["318", "Sid Hudson"],
      ["319", "Al Schroll"], ["320", "George Susce"]
    ]
  },
  {
    id: "1955-topps", year: 1955, brand: "Topps", name: "1955 Topps",
    cards: [
      ["2", "Ted Williams"], ["18", "Russ Kemmerer"], ["36", "Leo Kiely"],
      ["72", "Karl Olson"], ["83", "Tom Brewer"], ["91", "Milt Bolling"],
      ["106", "Frank Sullivan"], ["115", "Ellis Kinder"], ["116", "Tom Hurd"],
      ["128", "Ted Lepcio"], ["131", "Grady Hatton"], ["140", "Mel Parnell"],
      ["148", "Hal Brown"], ["150", "Mike Higgins", "Manager"],
      ["152", "Harry Agganis"], ["163", "Faye Throneberry"], ["171", "Dick Brodowski"],
      ["176", "Norm Zauchin"], ["200", "Jackie Jensen"], ["206", "Pete Daley"],
      ["207", "Billy Consolo"]
    ]
  },
  {
    id: "1956-topps", year: 1956, brand: "Topps", name: "1956 Topps",
    cards: [
      ["5", "Ted Williams"], ["26", "Grady Hatton"], ["34", "Tom Brewer"],
      ["71", "Frank Sullivan"], ["89", "Norm Zauchin"], ["93", "George Susce"],
      ["111", "Boston Red Sox", "Team card"], ["115", "Jackie Jensen"],
      ["122", "Willard Nixon"], ["143", "Jim Piersall"], ["168", "Sammy White"],
      ["217", "Billy Klaus"], ["228", "Mickey Vernon"], ["245", "Billy Goodman"],
      ["248", "Bob Porterfield"], ["256", "Tom Hurd"], ["284", "Ike Delock"],
      ["298", "Johnny Schmitz"], ["304", "Frank Malzone"], ["313", "Gene Stephens"],
      ["315", "Milt Bolling"]
    ]
  },
  {
    id: "1957-topps", year: 1957, brand: "Topps", name: "1957 Topps",
    cards: [
      ["1", "Ted Williams"], ["21", "Frank Sullivan"], ["56", "Dave Sisler"],
      ["63", "Ike Delock"], ["75", "Jim Piersall"], ["92", "Mickey Vernon"],
      ["112", "Tom Brewer"], ["118", "Bob Porterfield"], ["131", "Milt Bolling"],
      ["163", "Sammy White"], ["171", "Boston Red Sox", "Team card"],
      ["189", "Willard Nixon"], ["202", "Dick Gernert"], ["217", "Gene Stephens"],
      ["220", "Jackie Jensen"], ["229", "George Susce"], ["288", "Ted Lepcio"],
      ["292", "Billy Klaus"], ["303", "Billy Goodman"], ["313", "Mel Parnell"],
      ["336", "Haywood Sullivan"], ["342", "Gene Mauch"], ["355", "Frank Malzone"],
      ["372", "Norm Zauchin"], ["381", "Dean Stone"], ["388", "Pete Daley"],
      ["399", "Billy Consolo"]
    ]
  },
  {
    id: "1958-topps", year: 1958, brand: "Topps", name: "1958 Topps",
    cards: [
      ["1", "Ted Williams"], ["18", "Frank Sullivan"], ["29", "Ted Lepcio"],
      ["38", "Dick Gernert"], ["59", "Dave Sisler"], ["73", "Pete Daley"],
      ["89", "Billy Klaus"], ["130", "Jackie Jensen"], ["148", "Billy Consolo"],
      ["167", "Frank Baumann"], ["189", "George Susce"], ["197", "Haywood Sullivan"],
      ["204", "Leo Kiely"], ["220", "Tom Brewer"], ["227", "Gene Stephens"],
      ["260", "Frank Malzone"], ["265", "Pete Runnels"], ["280", "Jim Piersall"],
      ["297", "Don Buddin"], ["312", "Boston Red Sox", "Team card"],
      ["328", "Ike Delock"], ["344", "Bob Porterfield"], ["361", "Mike Fornieles"],
      ["371", "Marty Keough"], ["383", "Lou Berberet"], ["395", "Willard Nixon"],
      ["410", "Murray Wall"], ["414", "Sammy White"], ["445", "Bob Smith"],
      ["473", "Bill Renna"], ["481", "Frank Malzone", "All-Star"],
      ["485", "Ted Williams", "All-Star"], ["489", "Jackie Jensen", "All-Star"]
    ]
  },
  {
    id: "1959-topps", year: 1959, brand: "Topps", name: "1959 Topps",
    cards: [
      ["13", "Dick Gernert"], ["32", "Don Buddin"], ["42", "Murray Wall"],
      ["55", "Tom Brewer"], ["72", "Bill Renna"], ["91", "Herb Moford"],
      ["112", "Billy Consolo"], ["139", "Ed Sadowski", "Rookie Stars"],
      ["146", "Jerry Zimmerman", "Rookie Stars"], ["161", "Frank Baumann"],
      ["173", "Bill Monbouquette"], ["185", "Jim Busby"], ["199", "Leo Kiely"],
      ["220", "Frank Malzone"], ["236", "Ted Bowsfield"],
      ["248", "Boston Red Sox", "Team card"], ["261", "Gene Stephens"],
      ["276", "Pete Daley"], ["286", "Dean Stone"], ["303", "Marty Keough"],
      ["323", "Frank Sullivan"], ["346", "Tom Brewer & Dave Sisler", "Combo card"],
      ["348", "Ted Lepcio"], ["361", "Willard Nixon"], ["370", "Pete Runnels"],
      ["384", "Dave Sisler"], ["400", "Jackie Jensen"], ["416", "Haywood Sullivan"],
      ["437", "Ike Delock"], ["456", "Jerry Casale"], ["473", "Mike Fornieles"],
      ["486", "Sammy White"], ["500", "Vic Wertz"],
      ["519", "Runnels, Gernert & Malzone", "Combo card"], ["521", "Gary Geiger"],
      ["558", "Frank Malzone", "All-Star"]
    ]
  },
  {
    id: "1960-topps", year: 1960, brand: "Topps", name: "1960 Topps",
    cards: [
      ["15", "Pete Runnels"], ["38", "Jerry Casale"], ["54", "Mike Fornieles"],
      ["68", "Dave Hillman"], ["71", "Marty Keough"], ["94", "Leo Kiely"],
      ["111", "Vic Wertz"], ["117", "Tom Borland"], ["148", "Carl Yastrzemski", "Rookie card"],
      ["153", "Bobby Thomson"], ["184", "Gary Geiger"], ["203", "Sammy White"],
      ["220", "Billy Jurges", "Manager"], ["232", "Jim Busby"], ["249", "Earl Wilson"],
      ["267", "Jim Marshall"], ["280", "Frank Sullivan"], ["296", "Nelson Chittum"],
      ["310", "Frank Malzone"], ["317", "Pumpsie Green"], ["336", "Ike Delock"],
      ["363", "Gene Stephens"], ["382", "Ted Bowsfield"], ["403", "Ed Sadowski"],
      ["426", "Ron Jackson"], ["439", "Tom Brewer"], ["452", "Ray Webster"],
      ["456", "Red Sox Coaches", "York, Herman, Maglie, Baker"],
      ["474", "Haywood Sullivan"], ["487", "Tom Sturdivant"], ["520", "Don Buddin"],
      ["533", "Lu Clinton"], ["537", "Boston Red Sox", "Team card"],
      ["544", "Bill Monbouquette"], ["557", "Frank Malzone", "All-Star"]
    ]
  },
  {
    id: "1961-topps", year: 1961, brand: "Topps", name: "1961 Topps",
    cards: [
      ["16", "Billy Muffett"], ["33", "Gary Geiger"], ["53", "Russ Nixon"],
      ["69", "Earl Wilson"], ["81", "Tracy Stallard"], ["99", "Don Buddin"],
      ["113", "Mike Fornieles"], ["128", "Rip Repulski"], ["193", "Gene Conley"],
      ["210", "Pete Runnels"], ["221", "Mike Higgins", "Manager"], ["236", "Don Gile"],
      ["257", "Carroll Hardy"], ["268", "Ike Delock"], ["287", "Carl Yastrzemski"],
      ["301", "Chet Nichols"], ["326", "Dave Hillman"], ["340", "Vic Wertz"],
      ["354", "Billy Harrell"], ["373", "Boston Red Sox", "Team card"],
      ["419", "Tom Borland"], ["434", "Tom Brewer"], ["445", "Frank Malzone"],
      ["454", "Pumpsie Green"], ["476", "Jackie Jensen", "MVP"],
      ["499", "Chuck Schilling"], ["519", "Jim Pagliaroni"], ["540", "Jackie Jensen"],
      ["548", "Ted Wills"], ["562", "Bill Monbouquette"]
    ]
  },
  {
    id: "1962-topps", year: 1962, brand: "Topps", name: "1962 Topps",
    cards: [
      ["3", "Pete Runnels"], ["35", "Don Schwall"], ["81", "Jim Pagliaroni"],
      ["101", "Carroll Hardy"], ["117", "Gary Geiger"], ["153", "Pumpsie Green"],
      ["187", "Gene Conley"], ["201", "Ike Delock"], ["225", "Frank Malzone"],
      ["244", "Don Gile"], ["276", "Hal Kolstad"], ["301", "Galen Cisco"],
      ["334", "Boston Red Sox", "Team card"], ["336", "Billy Muffett"],
      ["345", "Chuck Schilling"], ["368", "Bob Tillman"], ["403", "Chet Nichols"],
      ["425", "Carl Yastrzemski"], ["444", "Ted Wills"], ["457", "Lu Clinton"],
      ["467", "Chuck Schilling", "All-Star"], ["504", "Eddie Bressoud"],
      ["512", "Mike Fornieles"], ["523", "Russ Nixon"], ["542", "Dave Philley"],
      ["559", "Mike Higgins", "Manager"], ["567", "Tracy Stallard"],
      ["580", "Bill Monbouquette"]
    ]
  },
  {
    id: "1963-topps", year: 1963, brand: "Topps", name: "1963 Topps",
    cards: [
      ["28", "Mike Fornieles"], ["52", "Chuck Schilling"], ["76", "Earl Wilson"],
      ["96", "Lu Clinton"], ["115", "Carl Yastrzemski"], ["136", "Ike Delock"],
      ["168", "Russ Nixon"], ["188", "Eddie Bressoud"],
      ["202", "Boston Red Sox", "Team card"], ["216", "Gene Conley"],
      ["232", "Frank Malzone"], ["251", "Jack Lamabe"], ["285", "Dick Stuart"],
      ["307", "Chet Nichols"], ["328", "Dick Williams"],
      ["343", "Johnny Pesky", "Manager"], ["363", "Dick Radatz"], ["384", "Bob Tillman"],
      ["408", "Billy Gardner"], ["432", "Roman Mejias"], ["447", "Felix Mantilla"],
      ["480", "Bill Monbouquette"], ["513", "Gary Geiger"], ["574", "Hal Kolstad"]
    ]
  },
  {
    id: "1964-topps", year: 1964, brand: "Topps", name: "1964 Topps",
    cards: [
      ["25", "Bill Monbouquette"], ["60", "Frank Malzone"], ["79", "Bob Heffner"],
      ["93", "Gary Geiger"], ["112", "Bob Tillman"], ["153", "Dick Williams"],
      ["170", "Dick Radatz"], ["182", "Sox Sockers", "Schilling & Yastrzemski"],
      ["186", "Roman Mejias"], ["210", "Carl Yastrzemski"], ["228", "Felix Mantilla"],
      ["248", "Johnny Pesky", "Manager"], ["267", "Wilbur Wood"],
      ["287", "Red Sox Rookies", "Tony Conigliaro & Bill Spanswick"],
      ["305", "Jack Lamabe"], ["329", "Russ Nixon"], ["352", "Eddie Bressoud"],
      ["376", "Dave Morehead"], ["410", "Dick Stuart"],
      ["428", "Red Sox Rookies", "Archie Skeen & Pete Smith"],
      ["459", "Red Sox Rookies", "Pete Charton & Dalton Jones"],
      ["481", "Chuck Schilling"], ["503", "Earl Wilson"], ["526", "Lu Clinton"],
      ["579", "Boston Red Sox", "Team card"]
    ]
  },
  {
    id: "1965-topps", year: 1965, brand: "Topps", name: "1965 Topps",
    cards: [
      ["29", "Felix Mantilla"], ["42", "Earl Wilson"], ["55", "Tony Conigliaro"],
      ["74", "Red Sox Rookies", "Rico Petrocelli & Jerry Stephenson"],
      ["88", "Jack Lamabe"], ["111", "Lee Thomas"], ["142", "Bill Monbouquette"],
      ["147", "Dennis Bennett"], ["162", "Russ Nixon"], ["178", "Dalton Jones"],
      ["199", "Bob Heffner"], ["222", "Bob Tillman"], ["251", "Billy Herman", "Manager"],
      ["272", "Chuck Schilling"], ["295", "Dick Radatz"], ["315", "Frank Malzone"],
      ["356", "Bill Spanswick"], ["385", "Carl Yastrzemski"],
      ["403", "Boston Red Sox", "Team card"], ["434", "Dave Morehead"],
      ["452", "Gary Geiger"], ["494", "Jay Ritchie"],
      ["509", "Red Sox Rookies", "Bob Guindon & Gerry Vezendy"],
      ["525", "Eddie Bressoud"], ["543", "Ed Connolly"],
      ["573", "Red Sox Rookies", "Lonborg, Moses, Ryan & Schlesinger"],
      ["588", "Lenny Green"]
    ]
  }
];
