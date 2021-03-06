$(document).ready(function () {
  let dispand = $("#dispand");
  let expand = $("#expand");
  let sideNav = $("#sidenav");
  let search = $("#search");
  let searchE = $("#searchE");
  let newNote = $("#newNote");
  let newNoteE = $("#newNoteE");
  let shortcut = $("#shortcut");
  let shortcutE = $("#shortcutE");
  let allNotes = $("#allNotes");
  let allNotesE = $("#allNotesE");
  let notebook = $("#notebook");
  let notebookE = $("#notebookE");
  let share = $("#share");
  let shareE = $("#shareE");
  let tag = $("#tag");
  let tagE = $("#tagE");
  let trash = $("#trash");
  let trashE = $("#trashE");
  let upgrade = $("#upgrade");
  let upgradeE = $("#upgradeE");

  dispand.hide();
  searchE.hide();
  newNoteE.hide();
  shortcutE.hide();
  allNotesE.hide();
  notebookE.hide();
  shareE.hide();
  tagE.hide();
  trashE.hide();
  upgradeE.hide();

  expand.click(function () {
    sideNav.animate({width: '250px'}, {duration: 500});
    expand.hide();
    dispand.show();
    dispand.animate({left: '180px'});
    search.hide();
    searchE.show();
    newNote.hide();
    newNoteE.show();
    shortcut.hide();
    shortcutE.show();
    allNotes.hide();
    allNotesE.show();
    notebook.hide();
    notebookE.show();
    share.hide();
    shareE.show();
    tag.hide();
    tagE.show();
    trash.hide();
    trashE.show();
    upgrade.hide();
    upgradeE.show();
  });

  dispand.click(function () {
    sideNav.animate({width: '65px'}, {duration: 500});
    dispand.hide();
    expand.show();
    searchE.hide();
    search.show();
    newNote.show();
    newNoteE.hide();
    shortcut.show();
    shortcutE.hide();
    allNotes.show();
    allNotesE.hide();
    notebook.show();
    notebookE.hide();
    share.show();
    shareE.hide();
    tag.show();
    tagE.hide();
    trash.show();
    trashE.hide();
    upgrade.show();
    upgradeE.hide();
  })
});
// window.location.reload();
