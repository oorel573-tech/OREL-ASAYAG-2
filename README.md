# OREL-ASAYAG-2

אתר סטטי מוכן לפרסום ב-GitHub Pages.

## קבצים חשובים
- `index.html` - דף הבית של האתר
- `styles.css` - עיצוב רספונסיבי
- `script.js` - טעינת נתונים מהאינטרנט
- `.github/workflows/pages.yml` - פריסה אוטומטית ל-GitHub Pages
- `.nojekyll` - ביטול עיבוד Jekyll ב-GitHub Pages

## איך לפרסם את האתר
1. דחוף את כל הקבצים לענף `main`.
2. GitHub Actions יפרוס אוטומטית את האתר.
3. לאחר סיום הריצה, גש לכתובת:

   `https://oorel573-tech.github.io/OREL-ASAYAG-2/`

## בדיקה מקומית
אם אתה רוצה לבדוק קודם כל מקומית:
1. פתח טרמינל בתיקיית הפרויקט.
2. הרץ:
   - `python3 -m http.server 8000`
3. פתח בדפדפן:
   - `http://localhost:8000`

## גישה דרך נייד
1. חבר את המחשב והטלפון לאותה רשת Wi-Fi.
2. בדוק את כתובת ה-IP של המחשב.
3. פתח בטלפון:
   - `http://<IP של המחשב>:8000`
