$(function() {

  describe('RSS Feeds', function() {

    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });
    // spec is for  to know urls are defined and  also not empty
    it('urls are  defined', () => {
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeTruthy();
      }
    })
    // spec is for to know names are defined are not
    it('name defined', () => {
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name.length).not.toBe(0);
      }

    })


  });

  //spec is for ensure to check  menu element is hidden  by default and also we have to check menu changes visibility  when the menu is clicked
  describe('The menu', () => {

    it('menu element is hidden', () => {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    })
    it('working toggle on click event', () => {
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBeFalsy();

      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBeTruthy();
    });
  })

  //spec is for define  if initial entries has more than o Entries

  describe("Initial Entries", () => {
    beforeEach((done) => {
      loadFeed(0, () => {
        done();
      });
    });
    it("define if entries has more than 0 entries", function() {
      expect($('.feed .entry').length).toBeGreaterThan(0);
    });
  });

  // spec is for define the new feed is different fron old noe or not
  describe("New feed selection", () => {
    let startFeed;
    let endFeed;
    beforeEach((done) => {
      loadFeed(0, () => {
        startFeed = $('.feed').html();
        loadFeed(1, () => {
          endFeed = $('.feed').html();
          done();
        });
      });
    });
    it("new feed is different from old feed", function() {
      expect(startFeed).not.toEqual(endFeed);
    });
  });
}());
