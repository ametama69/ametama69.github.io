const style = document.createElement('style');
style.textContent = `
.si::before{ 
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
`;


for (const iconname of ["bluesky","niconico","github","instagram","misskey","mastodon","activitypub","scrapbox","x","rss","threads"]) {
  style.textContent += `
.si-${iconname}::before{
  background-image: url(https://cdn.simpleicons.org/${iconname});
}
`;
}

style.textContent += `
.si-wh::before{
  filter: brightness(90%) invert(1) brightness(1000%);
}

.si-bk::before{
  filter: brightness(0);
}
`;

document.head.appendChild(style);

