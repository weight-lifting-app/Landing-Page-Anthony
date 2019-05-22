class MemberProfile {
    constructor(member) {
      this.member = member;
      this.member.addEventListener('mouseenter', () => this.mouseEnter());
      this.member.addEventListener('mouseleave', () => this.mouseLeave());
    }
    mouseEnter(){
      this.member.classList.add('flash-border');
      this.member.classList.remove('border-blank');
    }
    mouseLeave(){
        this.member.classList.add('border-blank');
        this.member.classList.remove('flash-border');
    }
}


const teamMember = document.querySelectorAll('.team-member');
teamMember.forEach(member => new MemberProfile(member));


class Dropdown {
    constructor(element) {
      this.element = element;
      this.button = this.element.querySelector('.dropdown-button');
      this.content = this.element.querySelector('.dropdown-content');
      this.button.addEventListener('click', () => this.toggleContent());
    }
  
    toggleContent() {
    this.content.classList.toggle('dropdown-hidden');
    }
  }
  
  let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));