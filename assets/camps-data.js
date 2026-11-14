/* Camp data — edit here to update the Camps page and the "Next camp" badge.
   Registration links are the same Momence links used on the original site. */
window.NXG_CAMPS = {
  camps: [
    {
      id: 'thanksgiving', name: 'Thanksgiving Camp', season: 'Fall',
      start: '2026-11-23', end: '2026-11-27', dates: 'Nov 23 – 27',
      tagline: "Make the most of your Thanksgiving break.", color: '#0a5cff', location: null,
      tracks: [
        { label: 'Beginner & Intermediate', balls: 'Red · Orange · Green · Yellow Ball', time: '8:00 AM – 11:00 AM', hours: 3, price: '$150', unit: '1 week', link: 'https://momence.com/m/977911' },
        { label: 'Advanced & High Performance', balls: 'Yellow Ball', time: '8:00 AM – 1:00 PM', hours: 5, price: '$300', unit: '1 week', link: 'https://momence.com/m/977913' }
      ]
    },
    {
      id: 'christmas', name: 'Christmas Camp', season: 'Winter',
      start: '2026-12-28', end: '2027-01-01', dates: 'Dec 28 – Jan 1',
      tagline: "Make the most of your Christmas break.", color: '#16a34a', location: null,
      tracks: [
        { label: 'Beginner & Intermediate', balls: 'Red · Orange · Green · Yellow Ball', time: '8:00 AM – 11:00 AM', hours: 3, price: '$150', unit: '1 week', link: 'https://momence.com/m/977922' },
        { label: 'Advanced & High Performance', balls: 'Yellow Ball', time: '8:00 AM – 1:00 PM', hours: 5, price: '$300', unit: '1 week', link: 'https://momence.com/m/977925' }
      ]
    },
    {
      id: 'spring', name: 'Spring Break Camp', season: 'Spring',
      start: '2027-03-15', end: '2027-03-19', dates: 'March 15 – 19',
      tagline: 'A week of focused development over spring break.', color: '#db2777', location: 'Anna Courts',
      tracks: [
        { label: 'Beginner & Intermediate', balls: 'Red · Orange · Green · Yellow Beginner · Yellow Intermediate', focus: 'Fundamentals, fun, social environment, and fitness', time: '8:00 AM – 11:00 AM', hours: 3, price: '$150', unit: '1 week', link: 'https://momence.com/m/977929' },
        { label: 'Advanced', balls: 'Yellow Ball', focus: 'Drills, tactics, point play, and fitness', time: '8:00 AM – 1:00 PM', hours: 5, price: '$300', unit: '1 week', link: 'https://momence.com/m/977927' }
      ]
    },
    {
      id: 'summer1', name: 'Summer Camp 1', season: 'Summer',
      start: '2027-05-31', end: '2027-07-02', dates: 'May 31 – July 2',
      tagline: 'Five weeks of summer development.', color: '#f97316', location: 'Anna Courts',
      tracks: [
        { label: 'Beginner & Intermediate', balls: 'Red · Orange · Green · Yellow Beginner · Yellow Intermediate', focus: 'Fundamentals, fun, social environment, and fitness', time: '8:00 AM – 11:00 AM', hours: 3, price: '$750', unit: '5 weeks', link: 'https://momence.com/m/977932' },
        { label: 'Advanced', balls: 'Yellow Ball', focus: 'Drills, tactics, point play, and fitness', time: '8:00 AM – 1:00 PM', hours: 5, price: '$1,500', unit: '5 weeks', link: 'https://momence.com/m/977935' }
      ]
    },
    {
      id: 'summer2', name: 'Summer Camp 2', season: 'Summer',
      start: '2027-07-05', end: '2027-07-30', dates: 'July 5 – July 30',
      tagline: 'Tennis Development Camp: four more weeks of growth.', color: '#dc2626', location: 'Anna Courts',
      tracks: [
        { label: 'Beginner & Intermediate', balls: 'Red · Orange · Green · Yellow Beginner · Yellow Intermediate', focus: 'Fundamentals, fun, social environment, and fitness', time: '8:00 AM – 11:00 AM', hours: 3, price: '$600', unit: '4 weeks', link: 'https://momence.com/m/978392' },
        { label: 'Advanced', balls: 'Yellow Ball', focus: 'Drills, tactics, point play, and fitness', time: '8:00 AM – 1:00 PM', hours: 5, price: '$1,200', unit: '4 weeks', link: 'https://momence.com/m/977937' }
      ]
    }
  ],
  flex: [
    { label: '3-Hour Camp', price: '$175', unit: 'week', link: 'https://momence.com/m/977941' },
    { label: '5-Hour Camp', price: '$325', unit: 'week', link: 'https://momence.com/m/977944' }
  ],
  status(c, now = new Date()) {
    const s = new Date(c.start + 'T00:00:00'), e = new Date(c.end + 'T23:59:59');
    if (now > e) return 'past';
    if (now >= s) return 'now';
    return 'upcoming';
  },
  next(now = new Date()) {
    return this.camps.find(c => this.status(c, now) !== 'past') || null;
  }
};
