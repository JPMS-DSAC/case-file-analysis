from flask import Flask, render_template, jsonify
import sqlite3 
from werkzeug.exceptions import abort
from flask import Flask, render_template, request, url_for, flash, redirect
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return redirect("http://localhost:3000/", code=302)
    conn = get_db_connection()
    posts = conn.execute('SELECT * FROM posts').fetchall()
    conn.close()
    return render_template('index.html', posts=posts)
def convertToJSON(cases): 
    newCases = []
    for case in cases: 
        newCase = {} 
        keys = case.keys() 
        for key in keys: 
            newCase[key] = case[key] 
        newCases.append(newCase) 
    return newCases 

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

def get_post(post_id,number):
    conn = get_db_connection()
    post = conn.execute('SELECT * FROM posts WHERE id = ?',
                        (post_id,)).fetchone()
    conn.close()
    if post is None:
        abort(404)
    return post


@app.route('/about/')
def about():
    return render_template('about.html')

@app.route('/<int:post_id>/')
def post(post_id):
    conn = get_db_connection()
    post = conn.execute('SELECT * from posts WHERE id = ? ', (post_id,)).fetchone()
    conn.close()
    if post is None:
        abort(404)
    return render_template('post.html',post = post)

@app.route('/case_analysis/<int:case_file_id>/')
def case_analysis(case_file_id):
    conn = get_db_connection()
    case = conn.execute('SELECT * from cases WHERE case_number = ? ', (case_file_id,)).fetchone()
    conn.close()
    if case is None:
        abort(404)
    return render_template('case_analysis.html',case = case)

@app.route('/case_file_text/<int:case_file_id>')
def case_text(case_file_id):
    conn = get_db_connection()
    case = conn.execute('SELECT * from case_text where id = ? ', (case_file_id,)).fetchone()
    conn.close()
    if case is None:
        abort(404)
    return render_template('case_file.txt', case = case)


@app.route('/<int:post_id>/cases')
def getCases(post_id):
    conn = get_db_connection()
    cases = conn.execute('SELECT * from cases WHERE rule_id = ? LIMIT 9 OFFSET 1', (1,)).fetchall()
    conn.close()
    if cases is None:
        abort(404)
    print(cases[0]['content'])
    return render_template('case.html',cases = cases)

@app.route('/<int:post_id>/<int:case_offset>')
def getXCases(post_id,case_offset):
    conn = get_db_connection()
    # print("Pos ID",post_id)
    cases = conn.execute('SELECT * from cases WHERE rule_id = ? LIMIT 8 OFFSET ?', (post_id,case_offset)).fetchall()
    # lawyers_persp = conn.execute('SELECT * from lawyers WHERE case_id = ? LIMIT 8 OFFSET ? ', (case_id,case_offset)).fetchall()
    # sebi_persp = conn.execute('SELECT * from sebi WHERE case_id = ? LIMIT 8 OFFSET ?', (case_id,case_offset)).fetchall()
    # judges_persp = conn.execute('SELECT * from judges WHERE case_id = ? LIMIT 8 OFFSET ?', (case_id,case_offset)).fetchall()

    conn.close()
    if cases is None:
        abort(404)
        
    return render_template('case.html',cases = cases, post_id = post_id, case_offset=case_offset)


@app.route('/cases_react/<int:post_id>/<int:case_offset>',methods=['GET'])
def getXXCases(post_id,case_offset):
    conn = get_db_connection()
    cases = conn.execute('SELECT * from cases WHERE rule_id = ? LIMIT 8 OFFSET ?', (post_id,case_offset)).fetchall()
    conn.close()
    if cases is None:
        abort(404)
    cases = convertToJSON(cases)
    return jsonify(cases)


import json
import pandas as pd
@app.route('/lawyer/<int:case_id>/<int:case_offset>/')
def lawyer(case_id,case_offset):
    file_name = "/home/badwolf/Downloads/law_"+str(case_offset) +".json"
    dct = json.load(open(file_name))
    df = pd.DataFrame.from_records(dct)
    return render_template("lawyer_persp.html", column_names=df.columns.values, row_data=list(df.values.tolist()),zip=zip)

@app.route('/sebi/<int:case_id>/<int:case_offset>/')
def sebi(case_id,case_offset):
    file_name = "/home/badwolf/Downloads/sebi_" +str(case_offset) + ".json"
    dct = json.load(open(file_name))
    df = pd.DataFrame.from_records(dct)
    return render_template("sebi_persp.html", column_names=df.columns.values, row_data=list(df.values.tolist()),zip=zip)

@app.route('/judge/<int:case_id>/<int:case_offset>/')
def judge(case_id,case_offset):
    file_name = "/home/badwolf/Downloads/judge_" +str(case_offset) + ".json"
    dct = json.load(open(file_name))
    df = pd.DataFrame.from_records(dct)
    return render_template("judge_persp.html", column_names=df.columns.values, row_data=list(df.values.tolist()),zip=zip)

if __name__ == "__main__":
    app.run(host='0.0.0.0')

