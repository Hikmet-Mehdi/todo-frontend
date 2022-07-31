import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const TodoList = lazy(() => import('../pages/TodoList'));

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <TodoList />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
