import { computed, ref } from "vue";

// debugger;
localStorage.setItem("vue-note-data", null); // 새로 고침시 초기화  : 삭제 구현으로 필요없음
const notes = ref(JSON.parse(localStorage.getItem("vue-note-data")) || []);
console.log("notes.value.length", notes.value.length);
const activeNoteId = ref(null);

const term = ref("");

export default function useNote() {
  const updateStorage = () =>
    localStorage.setItem("vue-note-data", JSON.stringify(notes.value));

  const createNote = () => {
    const id = Math.floor(Math.random() * 10000);
    // const updated = Date.now()
    // const updated = new Date(Date.now()).toLocaleString()
    const updated = new Date(Date.now()).toISOString();
    notes.value.unshift({
      id,
      title: id + "-" + "Untitled" + (notes.value.length + 1),
      body: "[write datetime] " + updated.toString(),
      updated,
    });
    console.log("2 notes.value.length", notes.value.length);

    activeNoteId.value = id;
    updateStorage();
  };

  const activeNote = computed(() =>
    notes.value.find((note) => note.id === activeNoteId.value)
  );

  const searchedNotes = computed(() => {
    // 검색어 있으면 타이틀이 매치되는 경우만 필터링 한다.
    if (term.value.trim()) {
      // if term exists
      let findTitle = new RegExp(term.value, "i");
      console.log("-------------------findTitle=", findTitle);
      return notes.value.filter((note) => note.title.match(findTitle));
    }
    return notes.value;
  });

  const allNotes = computed(() =>
    searchedNotes.value.sort(
      (a, b) =>
        // console.log('sort=', b.updated - a.updated);
        // b.updated - a.updated // number
        a.updated > b.updated ? -1 : a.updated > b.updated ? 1 : 0 // string desc
    )
  );

  const searchTerm = computed({
    get: () => term.value,
    set: (value) => (term.value = value),
  });

  const setActiveNoteId = (id) => {
    console.log("setActiveNoteId 선택 클릭 id=", id);
    activeNoteId.value = id;
  };

  const updateNote = () => {
    console.log("updateNote");
    // activeNote.value.updated = Date.now();
    // activeNote.value.updated = new Date(Date.now()).toLocaleString()
    const updated = new Date(Date.now()).toISOString();
    activeNote.value.updated = updated;

    updateStorage();
  };

  const removeNote = () => {
    const index = notes.value.findIndex(
      (note) => note.id === activeNote.value.id
    );
    console.log(" 삭제할 현재 선택된 index 값 removeNote index=", index);
    notes.value = notes.value.filter((note) => note.id !== activeNote.value.id);
    updateStorage();

    let newIndex = 0;
    // if (index <= notes.value.length - 1) {// 선택된 노트의 인덱스가 마지막 인덱스보다 작다면
    //   newIndex = index;
    // } else if (index > notes.value.length - 1) {// 선택한 노트가 마지막 인덱스인 경우는 이전 인덱스 자동 선택되도록.
    //   newIndex = index - 1;
    // }
    if (index > notes.value.length - 1) {
      // 선택된 인덱스가 마지막 인 경우 마지막 인덱스 유지.
      newIndex = index - 1;
    } else {
      // 현재 인덱스 유지
      newIndex = index;
    }

    if (newIndex >= 0) {
      console.log("auto selected");
      setActiveNoteId(notes.value[newIndex].id);
    }
  };

  return {
    createNote,
    setActiveNoteId,
    updateNote,
    removeNote,
    searchTerm,
    allNotes,
    activeNote,
  };
}
