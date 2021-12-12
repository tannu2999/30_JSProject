var panelList = document.querySelectorAll(".panel");

      function increaseCardSize() {
        this.classList.toggle("open");
      }

      function insertText(e) {
        //e is the transition event that envoked it
        //this is the hmtl block that envoked it
        console.log(e.propertyName);
        if (e.propertyName.includes("flex")) {
          this.classList.toggle("open-active");
        }
      }

      //add eventListener to each of the panelList
      panelList.forEach((panel) =>
        panel.addEventListener("click", increaseCardSize)
      );
      //We want that when the imagecard size grows fully, then only the words should be added. Thus, to transitions as well we add the event listener
      //But

      panelList.forEach((panel) =>
        panel.addEventListener("transitionend", insertText)
      );