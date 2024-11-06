#!/usr/bin/env python3
"""Basic Flask App
"""

from flask import flask, render_template


app = flask(__name__)
app.url_map.strict_slashes = False


@app.route('/')
def get_index() -> str:
    """The home/index page
    """
    return render_template('0-index.html')


if __name__ == '__main__':

