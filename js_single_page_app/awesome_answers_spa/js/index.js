const API_KEY = '9991daed657df1762e244c71849bef716bf8fd817510c77d0657e2758b801ae8';
const BASE_URL = 'http://localhost:3000';

// HTTP REQUESTS

const Question = {
  all () {
    return fetch(
      `${BASE_URL}/api/v1/questions`,
      {
        headers: {
          'Authorization': API_KEY
        }
      }
    )
      .then(res => res.json())
  },
  get (id) {
    return fetch(
      `${BASE_URL}/api/v1/questions/${id}`,
      {
        headers: {
          'Authorization': API_KEY
        }
      }
    )
      .then(res => res.json())
  },
  create (params) {
    // params should be an object containing
    // attributes to create the question.
    // {title: 'Where are you?', body: 'Canada, US, UK, etc.'}
    return fetch(
      `${BASE_URL}/api/v1/questions`,
      {
        method: 'POST',
        headers: {
          'Authorization': API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }
    )
    .then(res => res.json());
  }
}

// function getQuestions() {
//   return fetch(
//     `${BASE_URL}/api/v1/questions`,
//     {
//       headers: {
//         'Authorization': API_KEY
//       }
//     }
//   )
//     .then(res => res.json())
// }

// HELPERS
function qS (query, node) {
  return (node || document).querySelector(query);
}

function qSA (query, node) {
  return (node || document).querySelectorAll(query);
}

function H (tagName, htmlAttrs = {}, ...elements) {
  const newElement = document.createElement(tagName);

  // Iterate over all the html attributes in the `htmlAttrs`
  // object and set them on the element with `.setAttribute()`
  for (let attribute in htmlAttrs) {
    newElement.setAttribute(attribute, htmlAttrs[attribute])
  }

  newElement.append(...elements);

  return newElement;
}

// DOM MANIPULATION

function renderQuestions (questions) {
  return questions.map(question => {
    return H('div', null,
      H(
        'a',
        {'class': 'QuestionLink', 'href': `#question/${question.id}`, 'data-id': question.id},
        question.title
      )
    );
  })
}

function renderQuestionDetails (question) {
  return H('div', {class: 'QuestionDetails'},
    H('h2', null, question.title),
    H('p', null, question.body),
    H('p', null, `By ${question.author.full_name}`),
    H('p', null, `Created at: ${question.created_at}`),
    H('h3', null, `Answers`),
    renderAnswerList(question.answers)
  );
}

function renderAnswerList (answers) {
  const answerLis = answers.map(answer =>
    H('li', null, answer.body)
  )

  return H('ul', {class: 'AnswerList'},
    ...answerLis
  );
}

function navigateTo (query) {
  // This function will iterate over all nodes
  // with the 'page' class. In the process, it will
  // hide all of them except for the one that matches
  // the css query obtained from the arguments.
  qSA('.page').forEach(node => {
    if (node.matches(query)) {
      node.classList.remove('hidden');
    } else {
      node.classList.add('hidden');
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const questionIndexDiv = qS('#QuestionIndex');
  const questionShowDiv = qS('#QuestionShow');
  const questionForm = qS('#QuestionForm');

  function reloadQuestionIndex () {
    Question.all()
      .then(questions => {
        questionIndexDiv.innerHTML = '';
        questionIndexDiv.append(...renderQuestions(questions));
      })
  }
  reloadQuestionIndex();

  // Handle navigation to QuestionShow page
  questionIndexDiv.addEventListener('click', event => {
    const target = event.target;

    if (target.matches('.QuestionLink')) {
      event.preventDefault();
      const questionId = target.getAttribute('data-id');
      Question
        .get(questionId)
        .then(question => {
          questionShowDiv.innerHTML = '';
          questionShowDiv.append(renderQuestionDetails(question));
          navigateTo('#QuestionShow');
        });
    }
  });

  // Handle create new questions with form
  questionForm.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    const fData = new FormData(form);

    Question.create({
      title: fData.get('title'),
      body: fData.get('body')
    })
      .then(({id}) => {
        reloadQuestionIndex();
        form.reset();
        return Question.get(id);
      })
      .then(question => {
        questionShowDiv.innerHTML = '';
        questionShowDiv.append(renderQuestionDetails(question));
        navigateTo('#QuestionShow');
      })
  });

  // Handle nav navigation
  qSA('nav > a').forEach(anchor => {
    anchor.addEventListener('click', event => {
      event.preventDefault();

      const currentTarget = event.currentTarget;
      const dataTarget = currentTarget.getAttribute('data-target');
      navigateTo(dataTarget);
    });
  });
});











// bump
