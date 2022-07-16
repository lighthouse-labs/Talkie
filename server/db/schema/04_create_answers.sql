DROP TABLE IF EXISTS answers CASCADE;

CREATE TABLE answers (
  id SERIAL PRIMARY KEY NOT NULL,
  audio_url VARCHAR(255), 
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  question_id  INTEGER REFERENCES questions(id) ON DELETE CASCADE,
  date DATE NOT NULL DEFAULT CURRENT_DATE
);